
// Simple form handler: builds mailto link (placeholder) — replace with server-side handler as needed.
document.getElementById && document.getElementById('orderForm') && document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();
  var name = this.name.value || '';
  var phone = this.phone.value || '';
  var comment = this.comment.value || '';
  // Build mailto
  var subject = encodeURIComponent('Заявка с сайта: Грузоперевозки Минск');
  var body = encodeURIComponent('Имя: ' + name + '\nТелефон: ' + phone + '\nКомментарий: ' + comment);
  var mailto = 'mailto:youremail@example.com?subject=' + subject + '&body=' + body;
  // Open mail client
  window.location.href = mailto;
  alert('Спасибо! Ваша заявка отправлена. Мы свяжемся в ближайшее время.');
  this.reset();
});
