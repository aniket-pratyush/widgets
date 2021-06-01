import React ,{useState}from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
const items= [
  {
    title: 'What is React?',
    content : 'React is a fronend js framework'
  },
  {
    title: 'Why use react?',
    content : 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use react?',
    content : 'You use React by creating components'
  },
]
const options= [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A shade of Blue',
    value: 'blue'
  },
]
export default () =>{
  
  return (
    <div>   
      <Translate />   
    </div>
  )
}