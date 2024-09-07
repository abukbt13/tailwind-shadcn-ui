<script setup>
</script>
<template>
  <div class="bg-yellow-100 h-screen flex justify-center items-center">
    <div class="border border-gray-300 bg-white p-6 rounded-lg shadow-lg w-[600px] h-[350px]">
      <h2 class="text-center text-2xl mb-4">Authentication</h2>
      <form class="space-y-4">
        <div>
          <label class="block mb-1 text-gray-700" for="username">Username</label>
          <input
              id="username"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
          >
        </div>
        <div>
          <label class="block mb-1 text-gray-700" for="password">Password</label>
          <input
              id="password"
              type="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
          >
        </div>
        <button class="bg-blue-500 w-full text-white px-4 py-2  hover:bg-red-600">
          Login
        </button>
      </form>
    </div>
  </div>
</template>


<style>

</style>