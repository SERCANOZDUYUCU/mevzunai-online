(function () {
  "use strict";

  function numberValue(id) {
    var el = document.getElementById(id);
    if (!el || el.value === "") return 0;
    var parsed = Number(el.value);
    return Number.isFinite(parsed) ? parsed : 0;
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

    var perUnitText = document.getElementById("apartment-per-unit-result");
    var remainingText = document.getElementById("apartment-remaining-result");
    var detailText = document.getElementById("apartment-detail");

    function calculate() {
      var totalExpense = numberValue("apartment-total-expense");
      var unitCount = numberValue("apartment-unit-count");
      var paidAmount = numberValue("apartment-paid-amount");
      var perUnit = totalExpense > 0 && unitCount > 0 ? totalExpense / unitCount : 0;
      var remaining = Math.max(totalExpense - paidAmount, 0);

      perUnitText.textContent = formatMoney(perUnit);
      remainingText.textContent = formatMoney(remaining);

      if (totalExpense === 0 || unitCount === 0) {
        detailText.textContent = "Toplam gider ve daire sayısını girerek daire başı tahmini aidatı görebilirsiniz.";
      } else if (paidAmount > 0) {
        detailText.textContent = "Ödenen tutar düşüldükten sonra kalan tahmini tutar gösterilir. Resmi muhasebe kaydı yerine geçmez.";
      } else {
        detailText.textContent = "Eşit paylaşım varsayımıyla daire başı tahmini aidat hesaplandı.";
      }
    }

    panel.addEventListener("input", calculate);
    calculate();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupCargoCalculator();
    setupProfitCalculator();
    setupExportChecklist();
    setupApartmentCalculator();
  });
}());
