document.getElementById("orderForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const order = document.getElementById("order").value.trim();
    const address = document.getElementById("address").value.trim();

    // رقم واتساب المحل
    // مثال: 967771234567
    // بدون + وبدون مسافات
    const shopNumber = "+967774746318";

    const message =
        "🛒 طلب جديد من تموينات الشفاء\n\n" +
        "👤 الاسم: " + name + "\n" +
        "📱 رقم الهاتف: " + phone + "\n" +
        "📦 الطلب:\n" + order + "\n\n" +
        "📍 موقع التوصيل: " +
        (address || "لم يحدد");

    const whatsappURL =
        "https://wa.me/" +
        shopNumber +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappURL;

});