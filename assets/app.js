(function () {
  "use strict";

  function numberValue(id) {
    var el = document.getElementById(id);
    if (!el || el.value === "") return 0;
    var parsed = Number(el.value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function hasNumberValue(id) {
    var el = document.getElementById(id);
    return !!(el && el.value !== "");
  }

  function radioValue(name, fallback) {
    var checked = document.querySelector("input[name='" + name + "']:checked");
    return checked ? checked.value : fallback;
  }

  function formatNumber(value, fractionDigits) {
    return new Intl.NumberFormat("tr-TR", {
      maximumFractionDigits: fractionDigits,
      minimumFractionDigits: fractionDigits
    }).format(value);
  }

  function formatMoney(value) {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 2
    }).format(value);
  }

  function formatMoneyText(value) {
    return formatNumber(value, 2) + " TL";
  }

  function setupCargoCalculator() {
    var form = document.getElementById("cargo-calculator");
    if (!form) return;

    var desiText = document.getElementById("cargo-desi-result");
    var billableText = document.getElementById("cargo-billable-result");
    var detailText = document.getElementById("cargo-detail");

    function calculate() {
      var width = numberValue("cargo-width");
      var length = numberValue("cargo-length");
      var height = numberValue("cargo-height");
      var weight = numberValue("cargo-weight");
      var desi = width > 0 && length > 0 && height > 0 ? width * length * height / 3000 : 0;
      var billable = Math.max(desi, weight);

      desiText.textContent = formatNumber(desi, 2) + " desi";
      billableText.textContent = formatNumber(billable, 2) + " kg/desi";

      if (desi === 0) {
        detailText.textContent = "Ölçüleri santimetre cinsinden girerek tahmini desi sonucunu görebilirsiniz.";
      } else if (weight > 0 && weight > desi) {
        detailText.textContent = "Gerçek ağırlık, desi değerinden yüksek görünüyor. Kargo firması kurallarına göre yüksek değer dikkate alınabilir.";
      } else if (weight > 0) {
        detailText.textContent = "Desi değeri, gerçek ağırlıktan yüksek görünüyor. Nihai ücretlendirme firma ve sözleşme koşullarına göre değişir.";
      } else {
        detailText.textContent = "Gerçek ağırlık girerseniz hacimsel değerle karşılaştırma yapılabilir.";
      }
    }

    form.addEventListener("input", calculate);
    calculate();
  }

  function setupProfitCalculator() {
    var form = document.getElementById("profit-calculator");
    if (!form) return;

    var profitText = document.getElementById("profit-result");
    var marginText = document.getElementById("profit-margin-result");
    var detailText = document.getElementById("profit-detail");

    function calculate() {
      var price = numberValue("sale-price");
      var productCost = numberValue("product-cost");
      var shippingCost = numberValue("shipping-cost");
      var commissionRate = numberValue("commission-rate");
      var packagingCost = numberValue("packaging-cost");
      var commission = price > 0 && commissionRate > 0 ? price * commissionRate / 100 : 0;
      var totalCost = productCost + shippingCost + commission + packagingCost;
      var profit = price - totalCost;
      var margin = price > 0 ? profit / price * 100 : 0;

      profitText.textContent = formatMoney(profit);
      marginText.textContent = "%" + formatNumber(margin, 2);
      detailText.textContent = "Tahmini doğrudan maliyet: " + formatMoney(totalCost) + ". Vergi, genel gider, iade, iskonto ve muhasebe etkileri dahil olmayabilir.";
    }

    form.addEventListener("input", calculate);
    calculate();
  }

  function setupExportChecklist() {
    var list = document.getElementById("export-checklist");
    if (!list) return;

    var boxes = Array.prototype.slice.call(list.querySelectorAll("input[type='checkbox']"));
    var countText = document.getElementById("checklist-count");
    var percentText = document.getElementById("checklist-percent");
    var bar = document.getElementById("checklist-progress");

    function calculate() {
      var checked = boxes.filter(function (box) { return box.checked; }).length;
      var total = boxes.length;
      var percent = total > 0 ? checked / total * 100 : 0;

      countText.textContent = checked + " / " + total + " başlık";
      percentText.textContent = "%" + formatNumber(percent, 0);
      bar.style.width = percent + "%";
    }

    boxes.forEach(function (box) {
      box.addEventListener("change", calculate);
    });
    calculate();
  }

  function setupApartmentCalculator() {
    var panel = document.getElementById("apartment-calculator");
    if (!panel) return;

    var totalExpenseText = document.getElementById("apartment-total-expense-result");
    var perUnitText = document.getElementById("apartment-per-unit-result");
    var perShopText = document.getElementById("apartment-per-shop-result");
    var expectedText = document.getElementById("apartment-expected-result");
    var paidText = document.getElementById("apartment-paid-result");
    var remainingText = document.getElementById("apartment-remaining-result");
    var collectionRateText = document.getElementById("apartment-collection-rate-result");
    var detailText = document.getElementById("apartment-detail");
    var announcementText = document.getElementById("apartment-announcement");
    var copyButton = document.getElementById("apartment-copy-announcement");
    var copyStatus = document.getElementById("apartment-copy-status");

    function calculate() {
      var totalExpense =
        numberValue("apartment-cleaning-expense") +
        numberValue("apartment-electric-expense") +
        numberValue("apartment-elevator-expense") +
        numberValue("apartment-staff-expense") +
        numberValue("apartment-repair-expense") +
        numberValue("apartment-other-expense");
      var unitCount = Math.max(numberValue("apartment-unit-count"), 0);
      var shopCount = Math.max(numberValue("apartment-shop-count"), 0);
      var shopCoefficientInput = numberValue("apartment-shop-coefficient");
      var shopCoefficient = shopCoefficientInput > 0 ? shopCoefficientInput : 1;
      var shareMode = radioValue("apartment-share-mode", "equal");
      var paidUnitCount = Math.min(Math.max(numberValue("apartment-paid-unit-count"), 0), unitCount);
      var paidAmountEntered = hasNumberValue("apartment-paid-amount");
      var paidAmountInput = numberValue("apartment-paid-amount");
      var participantCount = unitCount + shopCount;
      var weightedCount = unitCount + shopCount * shopCoefficient;
      var perUnit = 0;
      var perShop = 0;

      if (totalExpense > 0 && shareMode === "weighted" && weightedCount > 0) {
        var baseShare = totalExpense / weightedCount;
        perUnit = unitCount > 0 ? baseShare : 0;
        perShop = shopCount > 0 ? baseShare * shopCoefficient : 0;
      } else if (totalExpense > 0 && participantCount > 0) {
        var equalShare = totalExpense / participantCount;
        perUnit = unitCount > 0 ? equalShare : 0;
        perShop = shopCount > 0 ? equalShare : 0;
      }

      var expectedCollection = perUnit * unitCount + perShop * shopCount;
      var inferredPaidAmount = paidUnitCount * perUnit;
      var paidAmount = paidAmountEntered ? paidAmountInput : inferredPaidAmount;
      var remaining = Math.max(expectedCollection - paidAmount, 0);
      var collectionRate = expectedCollection > 0 ? Math.min(paidAmount / expectedCollection * 100, 100) : 0;

      totalExpenseText.textContent = formatMoney(totalExpense);
      perUnitText.textContent = formatMoney(perUnit);
      perShopText.textContent = shopCount > 0 ? formatMoney(perShop) : "Dükkan yok";
      expectedText.textContent = formatMoney(expectedCollection);
      paidText.textContent = formatMoney(paidAmount);
      remainingText.textContent = formatMoney(remaining);
      collectionRateText.textContent = "%" + formatNumber(collectionRate, 0);
      announcementText.value = "Sayın sakinler, bu ay apartman gider toplamı " + formatMoneyText(totalExpense) + "’dir. Daire başı tahmini aidat " + formatMoneyText(perUnit) + " olarak hesaplanmıştır. Lütfen ödemenizi apartman yönetimine iletiniz.";

      if (copyStatus) {
        copyStatus.textContent = "";
      }

      if (totalExpense === 0 || participantCount === 0) {
        detailText.textContent = "Gider kalemleri ve daire sayısını girerek daire başı tahmini aidatı görebilirsiniz.";
      } else if (shareMode === "weighted" && shopCount > 0) {
        detailText.textContent = "Katsayılı paylaşımda daire katsayısı 1, dükkan katsayısı " + formatNumber(shopCoefficient, 2) + " olarak kullanıldı. Sonuçlar ön hesaplama niteliğindedir.";
      } else if (paidAmount > 0) {
        detailText.textContent = "Tahsilat bilgisine göre kalan tutar ve tamamlanma oranı gösterilir. Resmi muhasebe kaydı yerine geçmez.";
      } else {
        detailText.textContent = "Eşit paylaşım varsayımıyla tahmini aidat hesaplandı. Tahsilat alanları doldurulursa kalan tutar görülebilir.";
      }
    }

    panel.addEventListener("input", calculate);
    panel.addEventListener("change", calculate);

    if (copyButton && announcementText) {
      copyButton.addEventListener("click", function () {
        announcementText.select();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(announcementText.value).then(function () {
            if (copyStatus) copyStatus.textContent = "Duyuru metni kopyalandı.";
          }).catch(function () {
            document.execCommand("copy");
            if (copyStatus) copyStatus.textContent = "Duyuru metni kopyalandı.";
          });
        } else {
          document.execCommand("copy");
          if (copyStatus) copyStatus.textContent = "Duyuru metni kopyalandı.";
        }
      });
    }

    calculate();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupCargoCalculator();
    setupProfitCalculator();
    setupExportChecklist();
    setupApartmentCalculator();
  });
}());
