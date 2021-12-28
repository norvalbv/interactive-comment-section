import userAvatar from '../images/avatars/image-amyrobson.png';
import './index.scss';

export default function Reply() {
    return (
        <div class="comment-input-container">
            <div class="user-avatar">
            <img src={userAvatar} alt='#' />
            </div>
            <textarea name="comment-input" id="comment-input" cols="30" rows="10" placeholder="Add a comment..."></textarea>
            <button>Send</button>
        </div>
    )
}
