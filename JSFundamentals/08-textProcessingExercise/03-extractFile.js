function extractFile(text) {
  let fileName = text.split('\\').pop();
  let lastDotIdx = fileName.lastIndexOf('.');

  let name = fileName.slice(0, lastDotIdx);
  let type = fileName.slice(lastDotIdx + 1);

  console.log(`File name: ${name}`);
  console.log(`File extension: ${type}`);
}
extractFile('C:\\Internal\\training-internal\\template.bak.pptx');
