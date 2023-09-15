<template>
  <div class="alert" v-if="error">{{ errorMsg }}</div>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
    <div class="flex flex-col gap-2">
      <label>Name</label>
      <input
        v-model="name"
        v-once
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label>Subject</label>
      <input
        v-model="subject"
        v-once
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject of Email"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label>Email</label>
      <input
        v-model="email"
        v-once
        type="text"
        name="email"
        id="email"
        placeholder="Your Email Address"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label>Message</label>
      <textarea
        v-model="message"
        v-once
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Write a Message"
      ></textarea>
    </div>

    <button class="btn md:w-4/12 lg:w-3/12" type="submit">Send Message</button>
  </form>
</template>

<script setup>
  const error = ref("");
  const errorMsg = ref("");
  const name = ref("");
  const subject = ref("");
  const email = ref("");
  const message = ref("");

  error.value = false;
  const alertElement = ref(null);
  onMounted(() => {
    alertElement.value = document.querySelector(".alert");
  });

  const handleSubmit = async () => {
    if (!name.value || !subject.value || !email.value || !message.value) {
      error.value = true;
      if (!name.value) {
        errorMsg.value = "Name is required";
        return;
      }
      if (!subject.value) {
        errorMsg.value = "Subject is required";
        return;
      }
      if (!email.value) {
        errorMsg.value = "Email is required";
        return;
      }
      if (!message.value) {
        errorMsg.value = "Message is required";
        return;
      }
    }
    name.value = name.value
      .trim()
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");

    subject.value = subject.value
      .trim()
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");

    email.value = email.value
      .trim()
      .replace(/[`~!#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, "");
    message.value = message.value
      .trim()
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");

    const res = await useFetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        subject: subject.value,
        email: email.value,
        message: message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => error.data);
  };
</script>

<style scoped>
  .alert {
    background: #dc2626;
    color: #fff;
    padding: 1rem;
    text-align: center;
    transition: all 0.3s;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input,
  select,
  textarea {
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0.75em 0.5em;
  }
  label {
    font-size: 1.125rem;
  }
</style>
