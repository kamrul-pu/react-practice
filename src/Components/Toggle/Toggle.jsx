import React, { useState } from 'react'

export default function Toggle() {
    const [toggle, setToggle] = useState(true);
    return (
        <div style={{ margin: "1rem", backgroundColor: 'pink', padding: "1rem" }}>
            {toggle && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, neque perferendis eligendi sed dolorem repellendus! Officia vel illo pariatur impedit tempora, animi omnis dolorem aliquam laudantium aliquid earum reprehenderit. Quidem repellendus porro velit quis! Repellat veniam aspernatur sequi ut dolor in atque id ipsam, laudantium quod, optio possimus voluptatum beatae.</p>}

            <div style={{ textAlign: "center" }}>
                <button onClick={() => setToggle(!toggle)} style={{ margin: "5px", padding: "5px" }}>{toggle ? "Hide" : "Show"}</button>
            </div>
        </div>

    )
}
