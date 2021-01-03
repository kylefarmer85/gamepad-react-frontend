import React, { useState } from 'react';
import { connect } from 'react-redux'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ReviewsInfiniteScrollContainer from './ReviewsInfiniteScrollContainer'
import { v4 as uuidv4 } from 'uuid';

const ReviewsPageContainer = (props) => {

  const [showFollowingsReviews, setShowFollowingsReviews] = useState(false)

  const toggleShowFollowingsReviews = () => {
    setShowFollowingsReviews(prevState => !prevState) 
  }

  return (
    <div className="mt-4" style={{textAlign: "center"}}>
      {
      props.user ?
        <>
          <ToggleButton
            type="checkbox"
            variant="none"
            style={{color: "white"}}
            name="radio"
            value={!showFollowingsReviews}
            checked={!showFollowingsReviews}
            onChange={toggleShowFollowingsReviews}
          > All Reviews
          </ToggleButton>

          <ToggleButton
            type="checkbox"
            variant="none"
            style={{color: "white"}}
            name="radio"
            value={showFollowingsReviews}
            checked={showFollowingsReviews}
            onChange={toggleShowFollowingsReviews}
          > Followed User Reviews
          </ToggleButton>

          {
            showFollowingsReviews ?

              <ReviewsInfiniteScrollContainer key={uuidv4()} userId={props.user.id} followingsBool={true} />
            :
              <ReviewsInfiniteScrollContainer key={uuidv4()} userId={false} followingsBool={false}  />
          }   
        </>
  
      :
        <>
          <h3>All Reviews</h3>
          <ReviewsInfiniteScrollContainer userId={false} followingsBool={false}  />
        </>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null) (ReviewsPageContainer);






// import React, { Component } from 'react';

// class ReviewsPageContainer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       showFollowingsReviews: false
//     }
//   }

//   toggleShowFollowingsReviews = () => {

//     this.setState(prevState => ({
//       showFollowingsReviews: !prevState.showFollowingsReviews
//     }))
//   }

//   renderFollowingsReviews = () => {

//     return <ReviewsInfiniteScrollContainer userId={this.props.user.id} followingsBool={true} />
//   }

//   renderAllReviews = () => {
  
//     return <ReviewsInfiniteScrollContainer userId={false} followingsBool={false}  />
//   }

//   render() {
//     return (
//       <div className="mt-4" style={{textAlign: "center"}}>
//       {
//       this.props.user ?
//         <>
//           <ToggleButton
//             type="radio"
//             variant="none"
//             style={{color: "white"}}
//             name="radio"
//             value={!this.state.showFollowingsReviews}
//             checked={!this.state.showFollowingsReviews}
//             onChange={this.toggleShowFollowingsReviews}
//           > All Reviews
//           </ToggleButton>

//           <ToggleButton
//             type="radio"
//             variant="none"
//             style={{color: "white"}}
//             name="radio"
//             value={this.state.showFollowingsReviews}
//             checked={this.state.showFollowingsReviews}
//             onChange={this.toggleShowFollowingsReviews}
//           > Followed User Reviews
//           </ToggleButton>

//           {
//             this.state.showFollowingsReviews ?

//               this.renderFollowingsReviews()
 
//             :
//               this.renderAllReviews()
//           }   
//         </>
  
//       :
//         <>
//           <h3>All Reviews</h3>
//           <ReviewsInfiniteScrollContainer userId={false} followingsBool={false}  />
//         </>
//       }
//     </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   }
// }

// export default connect(mapStateToProps, null) (ReviewsPageContainer);

