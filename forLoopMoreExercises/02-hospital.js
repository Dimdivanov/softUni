function hospital(input) {
  let n = Number(input[0]);

  let doctors = 7;

  let treatedPatients = 0;

  let untreatedPat = 0;

  for (let i = 1; i <= n; i++) {
    let patientsPerDay = Number(input[i]);

    if (i % 3 === 0 && untreatedPat > treatedPatients) {
      doctors++;
    }

    if (doctors < patientsPerDay) {
      treatedPatients += doctors;
      untreatedPat += patientsPerDay - doctors;
    } else if (doctors === patientsPerDay) {
      treatedPatients += doctors;
    } else {
      treatedPatients += patientsPerDay;
    }
  }

  console.log(`Treated patients: ${treatedPatients}.`);
  console.log(`Untreated patients: ${untreatedPat}.`);
}
hospital(['4', '7', '27', '9', '1']);
