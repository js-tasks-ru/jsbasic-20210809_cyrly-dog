function makeFriendsList(friends) {
	const list = document.createElement("ul");
	friends.forEach((friend) => {
    const item = document.createElement("li");
    item.innerHTML = `${friend.firstName} ${friend.lastName}`
  	list.append(item)
  })
  
  return list
}
