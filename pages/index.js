import Layout from '../components/layout'

import { useEffect, useState } from 'react'

import clipboard from 'clipboard'

export default function Home() {

  const [color, setColor] = useState()

  useEffect(() => {
    new clipboard('.btn')
    console.log("Clipboard created")
  }, [])
  

  const [slackString, setSlackString] = useState()

  function EmojiBoxUpdater (e) {
    console.log(color)
    let prefix = ":alphabet-white-"
    let lastChar = " "

    if (color == "white") {
      prefix = ":alphabet-white-"
    } else if (color == "yellow") {
      prefix = ":alphabet-yellow-"
    }

    const normalLetters = "abcdefghijklmnopqrstuvwxyz"

    let originalString = e.target.value
    let newString = ""
    for (let index = 0; index < originalString.length; index++) {

      if (color == "alternate") {
        if ("abcdefghijklmnopqrstuvwxyz!@?#".indexOf(lastChar) > -1) {
          if (prefix == ":alphabet-white-") {
            prefix = ":alphabet-yellow-"
          } else if (prefix == ":alphabet-yellow-") {
            prefix = ":alphabet-white-"
          }
        }
      }


      const letter = originalString.charAt(index).toLowerCase()
      lastChar = letter

      if (normalLetters.indexOf(letter) > -1) {
        newString = newString+prefix+letter+":"
      } else if (letter == "#") {
        newString = newString+prefix+"hash:"
      } else if (letter == "!") {
        newString = newString+prefix+"exclamation:"
      } else if (letter == "@") {
        newString = newString+prefix+"at:"
      } else if (letter == "?") {
        newString = newString+prefix+"question:"
      } else if (letter == " ") {
        newString = newString+"    "
      } else {
        newString = newString+letter
      }
    }

    setSlackString(newString)
  }

  function ColorPicker (e) {
    console.log("help", e.target.value)
    setColor(e.target.value)
  }

  return (
    <Layout>

      <div className="flex bg-blue-100 m-24 p-8 sm:m-4">
        <div className="flex-1"> 
          <div>
            <input type="radio" name="color" value="white" onChange={ColorPicker} />White<br />
            <input type="radio" name="color" value="yellow" onChange={ColorPicker} />Yellow<br />
            <input type="radio" name="color" value="alternate" onChange={ColorPicker} />Alternate<br />
          </div>

          Your Text<br />
          <textarea rows="10" cols="30" onChange={EmojiBoxUpdater}></textarea>
        </div>
        <div className="flex-1">
          Slack Text<br />
          <textarea rows="10" cols="30" type="text" id="slacktext" value={slackString}></textarea><br />
          <button className='bg-transparent hover:bg-blue text-blue-dark font-semibold py-2 px-4 border border-blue hover:border-black rounded btn' class="btn" data-clipboard-text={slackString}>Copy that text!</button>
        </div>

      </div>

    </Layout>

  )
}
