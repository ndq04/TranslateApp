import {useState} from 'react'
import axios from 'axios'
import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

const Translate = () => {
  const {isToggle} = useContext(ThemeContext)

  const [language1, setLanguage1] = useState('vi')
  const [language2, setLanguage2] = useState('en')

  const [state, setState] = useState({
    input: '',
    output: '',
    language: [
      {value: 'af', label: 'afrikaans'},
      {value: 'am', label: 'amharic'},
      {value: 'ar', label: 'arabic'},
      {value: 'az', label: 'azerbaijani'},
      {value: 'be', label: 'belarusian'},
      {value: 'bg', label: 'bulgarian'},
      {value: 'bn', label: 'bengali'},
      {value: 'bs', label: 'bosnian'},
      {value: 'ca', label: 'catalan'},
      {value: 'co', label: 'corsican'},
      {value: 'cs', label: 'czech'},
      {value: 'cy', label: 'welsh'},
      {value: 'da', label: 'danish'},
      {value: 'de', label: 'german'},
      {value: 'el', label: 'greek'},
      {value: 'en', label: 'Anh'},
      {value: 'eo', label: 'esperanto'},
      {value: 'es', label: 'spanish'},
      {value: 'et', label: 'estonian'},
      {value: 'eu', label: 'basque'},
      {value: 'fa', label: 'persian'},
      {value: 'fi', label: 'finnish'},
      {value: 'fr', label: 'french'},
      {value: 'fy', label: 'frisian'},
      {value: 'ga', label: 'irish'},
      {value: 'gd', label: 'scots gaelic'},
      {value: 'gl', label: 'galician'},
      {value: 'gu', label: 'gujarati'},
      {value: 'ha', label: 'hausa'},
      {value: 'he', label: 'hebrew'},
      {value: 'hi', label: 'hindi'},
      {value: 'hr', label: 'croatian'},
      {value: 'ht', label: 'haitian creole'},
      {value: 'hu', label: 'hungarian'},
      {value: 'hy', label: 'armenian'},
      {value: 'id', label: 'indonesian'},
      {value: 'ig', label: 'igbo'},
      {value: 'is', label: 'icelandic'},
      {value: 'it', label: 'italian'},
      {value: 'iw', label: 'hebrew'},
      {value: 'ja', label: 'Nhật'},
      {value: 'jw', label: 'javanese'},
      {value: 'ka', label: 'georgian'},
      {value: 'kk', label: 'kazakh'},
      {value: 'km', label: 'khmer'},
      {value: 'kn', label: 'kannada'},
      {value: 'ko', label: 'Hàn'},
      {value: 'ku', label: 'kurdish (kurmanji)'},
      {value: 'ky', label: 'kyrgyz'},
      {value: 'la', label: 'latin'},
      {value: 'lb', label: 'luxembourgish'},
      {value: 'lo', label: 'lao'},
      {value: 'lt', label: 'lithuanian'},
      {value: 'lv', label: 'latvian'},
      {value: 'mg', label: 'malagasy'},
      {value: 'mi', label: 'maori'},
      {value: 'mk', label: 'macedonian'},
      {value: 'ml', label: 'malayalam'},
      {value: 'mn', label: 'mongolian'},
      {value: 'mr', label: 'marathi'},
      {value: 'ms', label: 'malay'},
      {value: 'mt', label: 'maltese'},
      {value: 'my', label: 'myanmar (burmese)'},
      {value: 'ne', label: 'nepali'},
      {value: 'nl', label: 'dutch'},
      {value: 'no', label: 'norwegian'},
      {value: 'ny', label: 'chichewa'},
      {value: 'or', label: 'odia'},
      {value: 'pa', label: 'punjabi'},
      {value: 'pl', label: 'polish'},
      {value: 'ps', label: 'pashto'},
      {value: 'pt', label: 'portuguese'},
      {value: 'ro', label: 'romanian'},
      {value: 'ru', label: 'russian'},
      {value: 'sd', label: 'sindhi'},
      {value: 'si', label: 'sinhala'},
      {value: 'sk', label: 'slovak'},
      {value: 'sl', label: 'slovenian'},
      {value: 'sm', label: 'samoan'},
      {value: 'sn', label: 'shona'},
      {value: 'so', label: 'somali'},
      {value: 'sq', label: 'albanian'},
      {value: 'sr', label: 'serbian'},
      {value: 'st', label: 'sesotho'},
      {value: 'su', label: 'sundanese'},
      {value: 'sv', label: 'swedish'},
      {value: 'sw', label: 'swahili'},
      {value: 'ta', label: 'tamil'},
      {value: 'te', label: 'telugu'},
      {value: 'tg', label: 'tajik'},
      {value: 'th', label: 'Thái'},
      {value: 'tl', label: 'filipino'},
      {value: 'tr', label: 'turkish'},
      {value: 'ug', label: 'uyghur'},
      {value: 'uk', label: 'ukrainian'},
      {value: 'ur', label: 'urdu'},
      {value: 'uz', label: 'uzbek'},
      {value: 'vi', label: 'Việt'},
      {value: 'xh', label: 'xhosa'},
      {value: 'yi', label: 'yiddish'},
      {value: 'yo', label: 'yoruba'},
      {value: 'zu', label: 'zulu'},
      {value: 'zh-cn', label: 'Trung'},
    ],
  })

  const handleChange = (e) => {
    setState({
      ...state,
      input: e.target.value,
    })
  }
  const handleTranslate = () => {
    if (state.message !== '') {
      axios
        .post('http://127.0.0.1:2000/api/translate', {
          message: state.input,
          src: language1,
          dest: language2,
        })
        .then((res) => {
          console.log(res.data)
          setState({
            ...state,
            output: res.data,
          })
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className='translate'>
      <div
        className={
          isToggle
            ? 'translate-head dark'
            : 'translate-head'
        }
      >
        <span className='circle circle1'></span>
        <span className='circle circle2'></span>
        <span className='circle circle3'></span>
        <select
          id='language1'
          value={language1}
          onChange={(e) => setLanguage1(e.target.value)}
          className={isToggle ? 'dark' : ''}
        >
          {state.language.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          ))}
        </select>
        <i
          className={
            isToggle
              ? 'fas fa-arrow-alt-right dark'
              : 'fas fa-arrow-alt-right'
          }
        ></i>
        <select
          id='language2'
          value={language2}
          onChange={(e) => setLanguage2(e.target.value)}
          className={isToggle ? 'dark' : ''}
        >
          {state.language.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div
        className={
          isToggle
            ? 'translate-body dark'
            : 'translate-body'
        }
      >
        <div className={isToggle ? 'input dark' : 'input'}>
          <textarea
            type='text'
            name='input'
            value={state.input}
            onChange={handleChange}
            className={isToggle ? 'dark' : ''}
          ></textarea>
        </div>
        <div
          className={isToggle ? 'output dark' : 'output'}
        >
          {state.output}
        </div>
      </div>
      <div
        className={
          isToggle
            ? 'translate-foot dark'
            : 'translate-foot'
        }
      >
        <button onClick={handleTranslate}>Dịch</button>
      </div>
    </div>
  )
}

export default Translate
