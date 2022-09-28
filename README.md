# TextEncoder
# commit 1: problems
problem when the no of characters crossed the arr range
when same characters are repeated different/unique encoding-characters are obtained
due to which some actual-chars are not assigned an encoding-char even though they occurred for the 1st time
# commit 2:problems
resolved prev prblm.But, as each character gets only one encoding-char.
It is easier to notice where and how many times a particular character has occurred.
This makes predicting the actual text easier.
soln: make char-groups such that for each char we select one encoding-char from a set
of chars. And chars in no 2 sets will be common.
cons:this will require large no of unique chars
# todo:
add css
add localStorage so that the key:value arrays i.e arr,arr2 will hold their values
we must be able to decode multiple separate texts .
eg: text1 and text2 contain different info. They both must be stored separately after encoding.Also we need a unique no. to identify whether this encoded-text will be decoded to text1 or text2. 