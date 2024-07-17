export default function Edit() {
    return (
        <>
            <section id="edit-page" className="auth">
                <form id="edit">
                    <div className="container">
                        <h1>Edit Game</h1>
                        <label htmlfor="leg-title">Legendary title:</label>
                        <input type="text" id="title" name="title" value="" />

                        <label htmlfor="category">Category:</label>
                        <input type="text" id="category" name="category" value="" />

                        <label htmlfor="levels">MaxLevel:</label>
                        <input
                            type="number"
                            id="maxLevel"
                            name="maxLevel"
                            min="1"
                            value=""
                        />

                        <label htmlfor="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" value="" />

                        <label htmlfor="summary">Summary:</label>
                        <textarea name="summary" id="summary"></textarea>
                        <input className="btn submit" type="submit" value="Edit Game" />
                    </div>
                </form>
            </section>
        </>
    );
}
