{
  users.length > 0 ? (
    <ul>
      {users.map(user => (
        <li key={user._id}>
          <img src={user.avatar} alt={user.name} />
          <footer>
            <strong>{user.name}</strong>
            <p>{user.bio}</p>
          </footer>

          <div className="buttons">
            <button type="button" onClick={() => handleDislike(user._id)}>
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button" onClick={() => handleLike(user._id)}>
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <div className="empty">Acabou :(</div>
  );
}

{
  users.lenghth > 0 ? (
    <ul>
      {users.map(user => (
        <li key={user._id}>
          <img src={user.avatar} alt={user.name} />

          <footer>
            <strong> {user.name} </strong>
            <p>{user.bio}</p>
          </footer>

          <div className="buttons">
            <button type="button" onClick={() => handleDislike(user._id)}>
              <img src={dislike} alt="Dislike" />
            </button>

            <button type="button" onClick={() => handleLike(user._id)}>
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <div className="empty"> Acabou </div>
  );
}
