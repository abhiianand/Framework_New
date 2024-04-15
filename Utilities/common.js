// import XLSX from 'xlsx'
// import path from 'path'

const filepath = 'testData/'
export default class Common {
    static compareMapResultsWithTestData(map1, testData) {

        if (map1.size == 0) {
            return false;
        }
        let isEqual = true;
        // Iterate over the key-value pairs of map1
        for (let [key, value] of map1) {

            //Set age from current year and Date of birth
            if (key == 'Age' && value != "Not Completed") {
                const age = this.getCurrentAge(map1.get('DOB'))
                testData[key] = age.toString();
            } else if (key == 'Age'){
                testData[key] = "Not Completed"
            }

            // Check if the value for the key is equal in both maps

            if (Array.isArray(testData[key])) {
                const testDataList = value.split(",").map((element) => element.trim());
                const isListEqual = testData[key].every(item => testDataList.includes(item))

                if (!isListEqual) {
                    isEqual = false;
                    break;
                }
            }
            else if (key == 'Weight' || key == 'Height') {
                if (!testData[key].includes(value)) {
                    isEqual = false;
                    break;
                }
            }
            else if (testData[key] !== value) {
                isEqual = false;
                break;
            }
        }
        return isEqual;
    }

    static getCurrentAge(DOB) {
        let dobList = DOB.split("-");
        const today = new Date();
        const year = today.getFullYear();

        return year - parseInt(dobList[0]);
    }

    static getSystemDate() {
        // Get current date
        var currentDate = new Date();
        var day = currentDate.getDate().toString().padStart(2, '0');
        var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        var year = currentDate.getFullYear();

        return month + '/' + day + '/' + year;
    }

    static areListsEqual(list1, list2) {

        if (list1.length !== list2.length) {
            return false;
        }

        let filteredList = []
        for (let i = 0; i < list1.length; i++) {
            let str1 = list1[i].split(":");

            if (str1.length > 1) {
                filteredList.push(str1[1].trim());
            } else {
                filteredList.push(str1[0]);
            }
        }
        const sortedList1 = filteredList.slice().sort();
        const sortedList2 = list2.slice().sort();

        for (let i = 0; i < sortedList1.length; i++) {
            if(sortedList1[i] !== sortedList2[i]){
                return false;
            }
        }

        return true;
    }

    static readXLS(filename, sheetname) {
        let jsonData;
        try {
            const workbook = XLSX.readFile(path.join(filepath, filename));
            const worksheet = workbook.Sheets[sheetname];
            jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            return jsonData;
        } catch (error) {
            throw new Error("Unable to open xls file" + error)
        }
    }

    static mergeTwoLists(list1, list2) {
        const result = this.areListsEqual(list1, list2)

        if(result){
            return list1;
        }
        if(list1.length == 0){
            return list2
        }
        if(list2.length == 0){
            return list1
        }

        const mergedList = [...list1, ...list2];
        return mergedList;
    }

    static verifyStringFormat(inputString, format) {
        // Create a RegExp object from the format string
        const regex = new RegExp(format);

        // Test the input string against the regex pattern
        return regex.test(inputString);
    }

// arr1=[2,4,5,6,7,8]
//  arr2=[1,3,5,2,4,5,6,7,8]

    static arrayMatch(arrFullMatch,arrPartialMatch)
    {
    for (let i = 0; i < arrPartialMatch.length; i++) {
        if (!arrFullMatch.includes(arrPartialMatch[i])) {
            return false;
        } 
    }
       return true; 
    }


    

    // {
    //     for( let i=0;i<arrFullMatch.length;i++)
    //     {
    //         let match= false
    //         for(let j=0;j<arrPartialMatch.length;j++)
    //         {

    //             if(arrFullMatch[i]==arrPartialMatch[j])
    //             {
    //                 match=true
    //                 break;
    //             }
    //         }
    //         if(match==false)
    //         {
    //             return false;
    //         }
    //     }
}