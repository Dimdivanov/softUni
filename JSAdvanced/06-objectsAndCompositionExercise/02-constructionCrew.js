function constructionCrew(worker) {
  if (worker.dizziness) {
    worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
    worker.dizziness = !worker.dizziness;
  }
  return worker;
}
constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
