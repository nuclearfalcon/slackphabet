import Layout from '../components/layout'

import Datetime from 'react-datetime'

import { useState, useEffect } from 'react'

export default function Home() {

  let [date, setDate] = useState("date")

  useEffect(() => {
    console.log(quantizeDate(date))
    }, [date])


    //QUANTIZE THAT SHIT HERE
  function quantizeDate(normalDate) {

    let quantizedDate = normalDate.toString() + " quantized"

    return quantizedDate
  }

  return (
    <Layout>

      <div className="flex bg-blue-100 m-24 p-8 sm:m-4">
        <div className="flex-1">Select a date: 
          <Datetime onChange={pickedDate => setDate(quantizeDate(pickedDate.toDate()))} />
        </div>
        <div className="flex-1">
          Q u a n t i z e d  M e r i d i e m :<br/>
          {date.toString()}
        </div>

      </div>

    </Layout>

  )
}
