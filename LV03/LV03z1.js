const p1 = 5;
const p2 = 15;

function procijeniRedZaVoditeljaSmjene(brojOsoba) {
    if (brojOsoba > p2) return 'Otvoriti dodatni šalter';
    if (brojOsoba > p1) return 'Pojačan nadzor';
    return 'Normalno';
}

const unos = prompt('Unesite broj osoba u redu:');

if (unos === null) {
    alert('Unos je otkazan.');
} else if (unos.trim() === '') {
    alert('Greška: unos je prazan.');
} else if (!/^\d+$/.test(unos.trim())) {
    alert(
        'Greška: unesite cijeli broj, 0 ili veći (bez slova, decimala i minusa).',
    );
} else {
    const broj = Number(unos.trim());
    alert('Procjena: ' + procijeniRedZaVoditeljaSmjene(broj));
}
