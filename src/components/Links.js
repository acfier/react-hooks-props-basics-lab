import React from "react"; 

function Links(props) {
    console.log(props.links);
  return (
    <div>
        <h3>Links</h3>
        <a href = {props.links.github}>github</a>
        <a href = {props.links.linkedin}>linkedin</a>
    </div>
  );
}

export default Links;