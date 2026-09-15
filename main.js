// Unika — js/main.js
// Unico compito: sulla pagina Negozio, il modulo "Richiedi ordine" compone
// un messaggio e lo invia su WhatsApp al numero dello studio.
// Nessun pagamento online: pagamento e ritiro avvengono in negozio.
(function () {
  var WHATSAPP_NUMBER = '393759702283';

  function initOrderForm() {
    var form = document.getElementById('form-ordina');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nome = (document.getElementById('ord-nome') || {}).value || '';
      var telefono = (document.getElementById('ord-telefono') || {}).value || '';
      var prodotto = (document.getElementById('ord-prodotto') || {}).value || '';
      var quantita = (document.getElementById('ord-quantita') || {}).value || '1';
      var note = (document.getElementById('ord-note') || {}).value || '';

      if (!nome || !telefono || !prodotto) {
        alert('Compila nome, telefono e prodotto per inviare la richiesta.');
        return;
      }

      var righe = [
        'Ciao! Vorrei ordinare da Unika:',
        'Prodotto: ' + prodotto,
        'Quantità: ' + quantita,
        'Nome: ' + nome,
        'Telefono: ' + telefono
      ];
      if (note) righe.push('Note: ' + note);
      righe.push('(Pagamento e ritiro in negozio)');

      var testo = righe.join('
');
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(testo);
      window.open(url, '_blank');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOrderForm);
  } else {
    initOrderForm();
  }
})();