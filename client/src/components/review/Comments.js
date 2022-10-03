// import React, { useState, useEffect } from "react";
// import InputBox from "./Inputbox";
// import Comment from "./Comment";
// import axios from 'axios'
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';

// function Comments({ }) {
//     const exist = 1;

//     return (
//         <>{ !exist ? <h1>This thread does not exist.</h1> :
//         <div className="thread">
//             {/* <div className="thread__header">
//                 <span style={{float: "left"}}>
//                     <Button variant="outlined" color="primary"
//                     >
//                         <i className="bi bi-arrow-left"></i>{" Back"}
//                     </Button>
//                 </span>
//                 <br></br>
//                 <center>
//                     <h2>{title}</h2>
//                 </center>
//                 <div>
//                     { userId !== undefined && <InputBox addToast={addToast} userId={userId} />}
//                 </div>
//             </div> */}

//             <div className="thread__main">
//                 {/* {post.map((e, i) => (
//                     <div key={i}>
//                         <Comment
//                             username={e.username}
//                             authorId={e.postAuthorId}
//                             content={e.content}
//                             numOfLike={e.numOfLike}
//                         />
//                     </div>
//                 ))} */}
//                 <Comment 

//                     displayName="John Felix Anthony Cena"
//                     rating={3.5}
//                     title="2個李白以後"
//                     content="I'm 樓主. This page needs an input box for entering comments."
//                     //avatar="https://obs.line-scdn.net/0hjqZyqtxiNV5nAB1_e9tKCV1WNjFUbCZdAzZkXSRua2oeNXUIW28oa0sEOT4dOHIACW5zP0oCLm8ZOXEKUmAo/w1200"
//                 />
//                 <Comment 
                    
//                     displayName="John Felix Anthony Cena"
//                     rating={4.5}
//                     title="巴士返學jeng"
//                     content="I'm the first to reply! Category id can be removed since they are in same thread"
//                     //avatar="https://obs.line-scdn.net/0hjqZyqtxiNV5nAB1_e9tKCV1WNjFUbCZdAzZkXSRua2oeNXUIW28oa0sEOT4dOHIACW5zP0oCLm8ZOXEKUmAo/w1200"
//                 />
//                 <Comment 
                    
//                     displayName="John Felix Anthony Cena"
//                     rating={3.5}
//                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Elementum tempus egestas sed sed risus pretium. Amet luctus venenatis lectus magna fringilla. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Nunc consequat interdum varius sit amet mattis vulputate. Ultricies tristique nulla aliquet enim tortor. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Eu nisl nunc mi ipsum faucibus vitae aliquet. Diam vulputate ut pharetra sit. Libero justo laoreet sit amet cursus sit amet dictum. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Consectetur lorem donec massa sapien faucibus et molestie. Massa enim nec dui nunc. Nunc lobortis mattis aliquam faucibus purus in massa. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper."
//                     //avatar="https://obs.line-scdn.net/0hjqZyqtxiNV5nAB1_e9tKCV1WNjFUbCZdAzZkXSRua2oeNXUIW28oa0sEOT4dOHIACW5zP0oCLm8ZOXEKUmAo/w1200"
//                 />
//                 <Comment 
                    
//                     displayName="Bryan Chung"
//                     username="kobebryan9"
//                     rating={4.5}
//                     content="Just for testing right now!"
//                     //avatar="https://cdn.vox-cdn.com/thumbor/jPPpZ5FsyTUWpT9FgQJJIWek7Z0=/0x0:4326x2856/1820x1213/filters:focal(1817x1082:2509x1774):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66172075/kobe_2_getty_ringer.0.jpg"
//                     //image="https://c.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif"
//                 />
                
//             {/* <FlipMove>
//                 {Comments.map((Comment) => (
//                 <Comment
//                     key={Comment.text}
//                     displayName={Comment.displayName}
//                     username={Comment.username}
//                     verified={Comment.verified}
//                     text={Comment.text}
//                     avatar={Comment.avatar}
//                     image={Comment.image}
//                 />
//                 ))}
//             </FlipMove> */}
//             </div>
//         </div>
//         }</>
//     );
// }

// export default Comments;

import React, { useState, useEffect } from "react";
import InputBox from "./Inputbox";
import Post from "./Comment";
import axios from 'axios'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import $ from 'jquery';

function Comments(){
    const [comments, setComments] = useState([{'rating': 5, 'content':"testt"}, {'rating': 3, 'content':"testt2"}]);

    useEffect(() => {
        $.ajax({
            type: "GET",
            url: 'http://localhost:8081/review/company?name=DummyCompany',
            xhrFields: {withCredentials: true},
            success: function(result){
                setComments(result.comments);
            }.bind(this),
            errors: function(xhr, ajaxOptions, thrownError){
              alert(thrownError);
            }
          });
    }, [])
    // constructor(props) {
    //     super(props);
    //     this.state={
    //       name: new URLSearchParams(window.location.search).get("name"),
    //       comments: []
    //     }
    //   }
    // componentDidMount(){
    //     // $.ajax({
    //     //     type: "GET",
    //     //     url: 'http://localhost:3000/review/company?name='+this.state.name,
    //     //     xhrFields: {withCredentials: true},
    //     //     success: function(result){
    //     //       this.setState({comments: result.comments});
    //     //     }.bind(this),
    //     //     errors: function(xhr, ajaxOptions, thrownError){
    //     //       alert(thrownError);
    //     //     }
    //     //   });
    //     this.state.comments = [{'rating': 5, 'content':"testt"}, {'rating': 3, 'content':"testt2"}]
    // }

    return(
        <div>
            
            {console.log(comments)}
            {/* <InputBox/> */}
            {
                //comments.map(x => console.log(x))
                comments.map(x => <Post content={x.content} rating={x.rating}/>)
            }

            <InputBox />
            {/* <InputBox/> */}
        </div>
    );
}
export default Comments;