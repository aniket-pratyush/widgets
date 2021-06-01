import React, { useState, useEffect} from 'react';

import axios from 'axios';
const Convert = ({language,text}) =>{
    const [translated,setTranslated] = useState('');
    const [debouncedText,setDebouncedText]= useState(text);
    //This function will update debounced text if user waits for 5ms after entering text
    //We'll create another useeffect for tracking change in debounced text . This will request to google API
    useEffect(()=>{
        const timerId= setTimeout(()=>{
            setDebouncedText(text);
        },500)
        return ()=>{
            clearTimeout(timerId);
        }

    },[text]);

    //For making request to google API when debounced text is changed
    useEffect(() => {

        const doTranslation = async ()=>{

            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
            {},
            {
            params:{
                q: debouncedText,
                target : language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            },
          }
          );
          setTranslated(data.data.translations[0].translatedText);
        }
        doTranslation();
        
    },[debouncedText,language]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}
export default Convert;