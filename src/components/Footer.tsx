import { arrays } from "@/lib/arrays"

function Footer() {

  const { footerContact, footerSocialIcons, footerInfo } = arrays

  return (
    <footer className='index-layout'>
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
            <li className="footer__social-icons">
              {
                footerSocialIcons.map((icon, idx) => (
                  <div key={idx} >
                    <a href={icon.desc} target='_blank'>
                      {icon.icon}
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
              <li key={idx} className=''>
                {info.content}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a href="https://wa.me/972504438778" target='_blank' className='white-sqr-btn'>
            Whatsapp
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer