const initialState = {
    strand: "C"
};

module.exports = function rnaTranscriptionReducer(state = initialState, action) {
    switch(action.dnaStrand) {
        case "A":
           return { strand: "U"
           };
        case "C":
            return {
                strand: "G"
            };
        default:
            return initialState;
    }
    
};

