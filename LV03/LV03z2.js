function napraviPlan(n, k) {
    const plan = [];
    for (let i = 1; i <= n; i++) {
        plan.push('Ponavljanje ' + i);
        if (i % k === 0 && i < n) {
            plan.push('--- Pauza ---');
        }
    }
    plan.push('Kraj plana');
    return plan;
}

function procitajPozitivanBroj(poruka) {
    const unos = prompt(poruka);
    if (unos === null) return null;
    const tekst = unos.trim();
    if (!/^\d+$/.test(tekst) || Number(tekst) < 1) {
        alert('Greška: unesite pozitivan cijeli broj.');
        return null;
    }
    return Number(tekst);
}

const n = procitajPozitivanBroj('Unesite ukupan broj ponavljanja (n):');
if (n !== null) {
    const k = procitajPozitivanBroj(
        'Pauza nakon svakih koliko ponavljanja (k)?',
    );
    if (k !== null) {
        alert(napraviPlan(n, k).join('\n'));
    }
}
