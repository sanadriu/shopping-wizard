function loadProfileForm() {
  const template = `
    <form action="" id="profile-form" class="wizard__form">
      <h1 class="wizard__form-title">Profile</h1>
      <div class="wizard__input-cell">
        <label for="username">Username</label>
        <input type="text" id="username" name="username"/>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" maxlength="50"/>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" maxlength="20"/>
      </div>
      <div>
        <label for="password_confirmation">Password confirmation</label>
        <input type="password" id="password_confirmation" name="password" maxlength="20"/>
      </div>
      <div class="wizard__controls">
          <input type="reset" name="clear" value="Clear" class="wizard-btn clear-btn"/>
          <input type="submit" name="next" value="Next" class="wizard-btn next-btn"/>
      </div>
    </form>
  `;
}
