import { h } from 'preact';

export function User(props) {
    return (
        <div class="user">
            <figure class="user__image">
                <img src={props.image}/>
                <p class="user__name">{props.name}</p>
            </figure>
        </div>
    );
}

export default User;