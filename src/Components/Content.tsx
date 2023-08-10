import "./Content.style.css";
import { BookmarkSimple } from "@phosphor-icons/react";

export default function Content() {
  return (
    <main>
      <div className="main-container">
        <div className="card-one">
          <h2>Mastercraft Bamboo Monitor Riser</h2>
          <p>
            A beautiful & handcraft moitor stand to reduce neck and eye strain.
          </p>
          <div>
            <button>Back this project</button>
            <a href="#">
              <BookmarkSimple size={40}/>
              Bookmark
            </a>
          </div>
        </div>

        <div className="second-container">
          <div className="datas-container">
            <h2>$89,914</h2>
            <p>of $100,000 backed</p>
          </div>
          <div className="datas-container">
            <h2>5,007</h2>
            <p>total backers</p>
          </div>
          <div className="datas-container">
            <h2>56</h2>
            <p>days left</p>
          </div>
        </div>

        <div className="third-second">
          <h2>About this project</h2>
          <article>The Mastercraft Bamboo Monitor Riser is a study and stylesh plataform that elevates
          your screen to a more comfortable viewing height. Placing your monitor at eye level has
          taht potential improve your posture and make you more confortable while at work,
          halping you stay focused on task at hand</article>

          <p>Featuring artisan craftsmarship, the simplicity of design creates extra desk space below
          your computer to allow notepads, pens, and USB stricks to be stored under the stand.</p>

          <div className="content-one">
            <div className="sub-content-one">
              <h2>Bamboo Stand</h2>
              <p>Piedge $25 or more</p>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch
              our promotional campign, and you'll be added to a special Backer member list.
            </p>
            <div  className="sub-content-two">
              <div className="sub-content-three">
                <h2>101</h2>
                <p>left</p>
              </div>
              <button>Select Reward</button>
            </div>
          </div>

          <div className="content-one">
            <div className="sub-content-one">
              <h2>Bamboo Stand</h2>
              <p>Piedge $25 or more</p>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch
              our promotional campign, and you'll be added to a special Backer member list.
            </p>
            <div  className="sub-content-two">
              <div className="sub-content-three">
                <h2>101</h2>
                <p>left</p>
              </div>
              <button>Select Reward</button>
            </div>
          </div>

          <div className="content-one">
            <div className="sub-content-one">
              <h2>Bamboo Stand</h2>
              <p>Piedge $25 or more</p>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch
              our promotional campign, and you'll be added to a special Backer member list.
            </p>
            <div  className="sub-content-two">
              <div className="sub-content-three">
                <h2>101</h2>
                <p>left</p>
              </div>
              <button>Select Reward</button>
            </div>
          </div>
         
        </div>
      </div>
    </main>
  );
}
