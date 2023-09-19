function projectsCreation(input) {
  let name = input[0];
  let numProjects = Number(input[1]);
  let hoursReq = numProjects * 3;

  console.log(
    `The architect ${name} will need ${hoursReq} hours to complete ${numProjects} project/s.`
  );
}
projectsCreation[('George ', '4 ')];
