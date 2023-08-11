import { arrays } from "@/lib/arrays"

function Footer() {

  const { footerContact, footerSocialIcons, footerInfo } = arrays

  return (
    <footer className=''>
      <div className='footer-container'>
        <div>Yomama</div>
        <div>Contact
          <ul>
            {footerContact.map((contact, idx) => (
              <li key={idx} className='flex flex-row gap-3'>
                <div className='mr-2'>{contact.icon}</div>
                <div className='number'>{contact.desc}</div>
              </li>
            ))}
            <li className='flex flex-row py-2'>
              {
                footerSocialIcons.map((icon, idx) => (
                  <div key={idx}>
                    <a href={icon.desc} target='_blank'>
                      <div className='text-xl mr-2 py-2'>{icon.icon}</div>
                    </a>
                  </div>
                ))
              }
            </li>
          </ul>
        </div>
        <div>Information
          <ul>
            {footerInfo.map((info, idx) => (
              <li key={idx} className='flex flex-row gap-3'>
                {info.content}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a href="https://wa.me/972504438778" target='_blank' className='white-sqr-btn'>
            <button>Whatsapp</button>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer