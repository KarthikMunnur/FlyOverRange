// import React from 'react'

// function CreatePostPopup(props) {
//     return ( props.trigger)?(
        // <div className="categories-popup">
        //     <div className="categories-con">
        //         {/* <button className="close-btn">X</button> */}
               
                   
        //            <div className="search-con">
        //             <img src="../assets/categories-icon.png"></img>
        //             <form>
        //                 <input type="text" placeholder="Search Categories" name="Search "/>
        //             </form>
        //             </div>
        //             <div className="cate-list">
        //                 <div className="cate-list-con">
        //                     <h6>Categories</h6>
        //                     <ul className="cate-types">
        //                         <div className="row">
        //                             <li>
        //                                 <img src="../assets/emoji-icon.png"></img>
        //                                 <p>Sad</p>
        //                                 </li> 
        //                                 <li>
        //                                 <img src="../assets/emoji-icon.png"></img>
        //                                 <p>Sad</p>
        //                                 </li>
        //                        </div> 
        //                        <div className="row">
        //                             <li>
        //                                 <img src="../assets/emoji-icon.png"></img>
        //                                 <p>Sad</p>
        //                                 </li> 
        //                                 <li>
        //                                 <img src="../assets/emoji-icon.png"></img>
        //                                 <p>Sad</p>
        //                                 </li>
        //                        </div> 
        //                        <div className="row">
        //                             <li>
        //                                 <img src="../assets/emoji-icon.png"></img>
        //                                 <p>Sad</p>
        //                                 </li> 
        //                                 <li>
        //                                 <img src="../assets/emoji-icon.png"></img>
        //                                 <p>Sad</p>
        //                                 </li>
        //                        </div> 
        //                        <div className="row">
        //                             <li>
        //                                 <img src="../assets/emoji-icon.png"></img>
        //                                 <p>Sad</p>
        //                                 </li> 
        //                                 <li>
        //                                 <img src="../assets/emoji-icon.png"></img>
        //                                 <p>Sad</p>
        //                                 </li>
        //                        </div> 
        //                        </ul>   
        //                 </div>    
        //             </div>    
        //         </div>
        // </div>
//     ): "";
// }

// export default CreatePostPopup;

import React, { useState } from 'react';
import { render } from 'react-dom';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import EmojiData from "../Posts/createPost";


const CreatePostPopup = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [showPanel, togglePanel] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

return (     
        
          <ul className="attachments d-flex align-items-center">
          {
          showPanel? <div className="categories-popup">
          <div className="categories-con">
              {/* <button className="close-btn">X</button> */}
             
                 
                 <div className="search-con">
                  <img src="../assets/search-icon.png"></img>
                  <form>
                      <input type="text" placeholder="Search Categories" name="Search "/>
                  </form>
                  </div>
                  <div className="cate-list">
                      <div className="cate-list-con">
                          <h6>Categories</h6>
                          <ul className="cate-types">
                              <div className="row">
                                  <li className="cate-icon">
                                      <img src="../assets/emoji-icon.png"></img>
                                      <p>Depressed</p>
                                      </li> 
                                      <li className="cate-icon">
                                      <img src="../assets/emoji-icon.png"></img>
                                      <p>Sad</p>
                                      </li>
                             </div> 
                            
                             <div className="row">
                                  <li className="cate-icon">
                                      <img src="../assets/emoji-icon.png"></img>
                                      <p>Frastrated</p>
                                      </li> 
                                      <li className="cate-icon">
                                      <img src="../assets/emoji-icon.png"></img>
                                      <p>Angry</p>
                                      </li>
                             </div> 
                             <div className="row">
                                  <li className="cate-icon">
                                      <img src="../assets/emoji-icon.png"></img>
                                      <p>Anxious</p>
                                      </li> 
                                      <li className="cate-icon">
                                      <img src="../assets/emoji-icon.png"></img>
                                      <p>Suicidal</p>
                                      </li>
                             </div> 
                             <div className="row">
                                  <li className="cate-icon">
                                      <img src="../assets/emoji-icon.png"></img>
                                      <p>Lost</p>
                                      </li> 
                                      <li className="cate-icon">
                                      <img src="../assets/emoji-icon.png"></img>
                                      <p>Happy</p>
                                      </li>
                             </div> 
                             </ul>   
                      </div>    
                  </div>    
              </div>
      </div>:null
        }
      <li><img src="../assets/categories-icon.png" onClick={() => togglePanel(!showPanel) }></img></li>
              </ul>
             
      

       
    );    
    
   
};
// const EmojiData = ({chosenEmoji}) => (
//     <div style={{textAlign: 'center',marginRight: '810px'}}>
//       <br></br>
//       <br></br>
//       <hr></hr>
//       <strong>Names:</strong> {chosenEmoji.names.join(', ')}<br/>
//       <strong>Symbol:</strong> {chosenEmoji.emoji}<br/>
//     </div>
//   );
  

export default CreatePostPopup;
