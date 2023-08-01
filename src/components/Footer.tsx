import React from 'react'

const contact = [{
  icon: 'i',
  content: 'Shderot Hen 20, Tel Aviv, Israel'
},
{
  icon: 'i',
  content: 'open for work'
},
{
  icon: 'i',
  content: '+972-50-443-8778'
},
{
  icon: '',
  content: 'alonmlievski@gmail.com'
}]

function Footer() {
  return (
    <footer className=''>
      <div className='footer-container'>
        <div>Yomama</div>
        <div>Contact
          <ul>
            {contact.map((con, idx)=> (
              <li key={idx} className='flex flex-row'>
                <div>{con.icon}</div>
                <div>{con.content}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>Information</div>
        <div>Whatsapp</div>
      </div>
    </footer>
  )
}

export default Footer