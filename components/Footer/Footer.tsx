import React from 'react'

const Footer: React.FC = () => {
  return (
    <section className="footer bg-main-light p-10 text-main">
      <div className="flex justify-between">
        <div>
          <ul className="flex flex-col gap-3">
            <li>Safe deal</li>
            <li>All right reserved @2021</li>
          </ul>
        </div>
        <div className="flex justify-between gap-10">
          <div>
            <ul className="flex flex-col gap-3">
              <li>Download</li>
              <li>Microsoft Edge</li>
              <li>Yandex Browser</li>
              <li>Google Chrome</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>Privacy Policy</li>
              <li>User Agreement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
