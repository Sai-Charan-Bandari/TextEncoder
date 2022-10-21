# TextEncoder
This application can encode and decode text.
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
# Key Points about admin functionality
 - we must need the code (encoded text) to retrieve back our data
 - we can only check if the code's corresponding value array exists or not in the         localStorage using id
 - we can delete it if it exists
# Features
 -  Encodes data into random text and also decodes it back
 -  Automatically detects whether a txt needs to be encoded or decoded
 -  Assigns unique ids to encoded codes
 -  We must enter the entire code in order to retrieve back our data
 -  It doesnt directly store your data into localStorage and provide a unique id.
    This way there is a chance of accessing ur data.
 -  This application stores the encoded value information but not the encoded value or the actual data, thus, reducing the chances of others accessing ur data.
 -  Once a code is decoded, the code info will be deleted automatically.New code needs to be generated if we want to store the decoded data again.
 -  Its not an android application or executable code..it works in ur browser...So, no one actually doubts you of having a malicious application installed or u dont need to run the executable file.
 # Add ons
 -  Login system for individual users.So that even if u find someone's code u will not be able to decode it without logging in.
 -  Increase range of characters.Could try using all ASCII chars
 -  Add random char groups.So that each unique character is represented one of a random set of characters.   