import '../contact.sass'

export default function Contact() {
  return (
    <div>
      <div className="contact-us">
        <form action="#">
          <label for="customerName">
            NAME <em>&#x2a;</em>
          </label>
          <input
            id="customerName"
            name="customerName"
            required=""
            type="text"
          />
          <label for="customerEmail">
            EMAIL <em>&#x2a;</em>
          </label>
          <input
            id="customerEmail"
            name="customerEmail"
            required=""
            type="email"
          />
          <label for="customerPhone">PHONE</label>
          <input
            id="customerPhone"
            name="customerPhone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            type="tel"
          />
          <label for="customerNote">
            YOUR MESSAGE <em>&#x2a;</em>
          </label>
          <textarea
            id="customerNote"
            name="customerNote"
            required=""
            rows="4"
          ></textarea>
          <h3>Any feedback is appreciated!</h3>
          <button id="customerOrder">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
