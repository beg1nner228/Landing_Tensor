import { Dumbbell, Chevron } from './Icons.jsx';

// Recreation of the Tensor workspace dashboard — used in the hero device.
export default function PhoneMock() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="notch" />
      <div className="screen">
        <div className="appbg">
          <div className="statusbar">
            <span>09:41</span>
            <span className="icons">
              <svg width="17" height="11" viewBox="0 0 17 11">
                <rect x="0" y="6" width="3" height="5" rx="1" fill="#2c2a26" />
                <rect x="4.5" y="4" width="3" height="7" rx="1" fill="#2c2a26" />
                <rect x="9" y="2" width="3" height="9" rx="1" fill="#2c2a26" />
                <rect x="13.5" y="0" width="3" height="11" rx="1" fill="#2c2a26" />
              </svg>
              <svg width="22" height="11" viewBox="0 0 24 12">
                <rect x="0.5" y="0.5" width="20" height="11" rx="3" stroke="#2c2a26" opacity=".5" />
                <rect x="2" y="2" width="15" height="8" rx="1.5" fill="#2c2a26" />
                <rect x="21.5" y="4" width="1.5" height="4" rx=".75" fill="#2c2a26" opacity=".5" />
              </svg>
            </span>
          </div>
          <div className="mock-pad">
            <div className="mock-h">Workspace</div>
            <div className="mock-sub">Wednesday · Push day</div>

            <div className="banner"><span className="star">★</span> Tensor Pro trial — 9 days left</div>

            <div className="today">
              <div className="row">
                <div>
                  <div className="k">TODAY'S VOLUME</div>
                  <div className="v tabnum">5,728 <span style={{ fontSize: 13, opacity: 0.8 }}>kg</span></div>
                </div>
                <div className="ring"><i>70%</i></div>
              </div>
            </div>

            <div className="sect-label">PROJECTS</div>
            <div className="proj">
              <div className="ic" style={{ background: 'rgba(58,109,240,.12)', color: '#3a6df0' }}><Dumbbell /></div>
              <div><div className="nm">Summer Shred</div><div className="meta">5 routines · 4×/week</div></div>
              <span className="chev"><Chevron /></span>
            </div>
            <div className="proj">
              <div className="ic" style={{ background: 'rgba(200,144,44,.14)', color: '#c8902c' }}><Dumbbell /></div>
              <div><div className="nm">Strength 5×5</div><div className="meta">3 routines · 3×/week</div></div>
              <span className="chev"><Chevron /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
