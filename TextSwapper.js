//logic for swapping the text around the cursor

class TextSwapper {
    /** 
     * splits a line in two around the cursor, placing the right side above the left one
    *  @param {string} lineText full text of the line where the cursor is located
    *  @param {number} cursorIndex Character index of the cursor in the lineText
    *  @returns {string} Formatted string with the swapped words
    */
    static swap(lineText, cursorIndex) {
        
        //match indentation
        const indentationMatch = lineText.match(/^\s*/);
        const indentation = indentationMatch ? indentationMatch[0] : '';

        //split the string
        const leftBlock = lineText.substring(0, cursorIndex);
        const rightBlock = lineText.substring(cursorIndex);

        //Clean whitespace
        const cleanLeft = leftBlock.trimEnd();
        const cleanRight = rightBlock.trimStart();

        //Reassemble with indentation [Indent][Right] \n [Indent][Left]
        return `${indentation}${cleanRight}\n${indentation}${cleanLeft}`;

    }
}

module.exports = TextSwapper;