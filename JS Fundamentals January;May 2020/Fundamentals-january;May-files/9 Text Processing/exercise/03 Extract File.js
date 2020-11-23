function solve(input) {
    let indexExtension = input.lastIndexOf('.') + 1;
    let fileExtension = input.substring(indexExtension);

    let indexName = input.lastIndexOf('\\') + 1;
    let fileName = input.substring(indexName, indexExtension - 1);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');