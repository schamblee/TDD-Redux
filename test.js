const rnaTranscriptionReducer = require("./index.js");


describe("RNA transcription", function() {
    test("changes 'G' to 'C'", function() {
        expect(rnaTranscriptionReducer({
            strand: ""
        }, 
        {
            type: "TRANSCRIBE_TO_RNA",
            dnaStrand: "G"
        }).strand).toBe("C");
    });
    test("changes 'C' to 'G'", function() {
        expect(rnaTranscriptionReducer({
            strand: ""
        },
        {
            type: "TRANSCRIBE_TO_RNA",
            dnaStrand: "C"
        }
    ).strand).toBe("G");
    });
    test("changes 'A' to 'U'", function() {
        expect(rnaTranscriptionReducer({}, 
        {
            type: "TRANSCRIBE_TO_RNA",
            dnaStrand: "A"
        }).strand).toBe("U");
    });
});