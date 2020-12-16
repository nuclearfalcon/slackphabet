import Layout from '../components/layout'

import { useState } from 'react'

import ClipboardJS from 'clipboard'

export default function Home() {

  new ClipboardJS('.btn')

  const [slackString, setSlackString] = useState()

  function EmojiBoxUpdater (e) {

    const normalLetters = "abcdefghijklmnopqrstuvwxyz"

    let originalString = e.target.value
    let newString = ""
    for (let index = 0; index < originalString.length; index++) {
      const letter = originalString.charAt(index).toLowerCase()

      if (normalLetters.indexOf(letter) > -1) {
        newString = newString+":alphabet-white-"+letter+":"
      } else if (letter == "#") {
        newString = newString+":alphabet-white-hash:"
      } else if (letter == "!") {
        newString = newString+":alphabet-white-exclamation:"
      } else if (letter == "@") {
        newString = newString+":alphabet-white-at:"
      } else if (letter == "?") {
        newString = newString+":alphabet-white-question:"
      } else {
        newString = newString+letter
      }
    }

    setSlackString(newString)
  }

  return (
    <Layout>

      <div className="flex bg-blue-100 m-24 p-8 sm:m-4">
        <div className="flex-1"> 
          Your Text<br />
          <textarea rows="10" cols="30" onChange={EmojiBoxUpdater}></textarea>
        </div>
        <div className="flex-1">
          Slack Text<br />
          <textarea rows="10" cols="30" type="text" id="slacktext" value={slackString}></textarea><br />
          <button className='bg-transparent hover:bg-blue text-blue-dark font-semibold py-2 px-4 border border-blue hover:border-black rounded' class="btn" data-clipboard-target="#slacktext">Copy that text!</button>
        </div>

      </div>

    </Layout>

  )
}
