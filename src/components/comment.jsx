import './index.scss';
import iconReply from '../images/icon-reply.svg';
import userAvatar from '../images/avatars/image-amyrobson.png';

export default function Comment() {
    return (
        <div class="comment-container">
            <div class="likes-container">
            <p class="vote-btn">+</p>
            <p class="vote-amount">12</p>
            <p class="vote-btn">-</p>
            </div>
            <div class="text-container">
            <div class="top">
                <div class="user">
                <img src={userAvatar} alt='#' />
                <h2>maxblagun</h2>
                <p>3 weeks ago</p>
                </div>
                <div class="functionality">
                <div class="reply">
                    <img src={iconReply} alt='#' id="reply-icon" />
                    <a href="#">Reply</a>
                </div>
                </div>
            </div>
            <div class="bottom">
                <p id="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusamus optio quia sint deserunt nam eveniet necessitatibus officiis doloribus, suscipit ullam, amet magni asperiores qui nobis nesciunt fuga facere laboriosam?</p>
            </div>
            </div>
        </div>
    )
}
