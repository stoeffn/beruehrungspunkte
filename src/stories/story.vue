<template>
  <div class="story-container">
    <div class="story">
      <img class="story-picture" src="img/story-thumbnail.jpg" />
      <h1> Trees </h1>
      <div id="floated"> Some really interesting things about this good ass locking tree. And blablabla blablab lablab labla blablab lablablab lablablabl ablablab lablab labla bl ablabla blablabl ablab lablablab lablabla blablablabl abl ablablablab lablablabl abla blablabl ablablabl ablabl ablabla blabl abla blabla blabla blabl ablab labla bla bla blaalalalalal vlallablalblalblabl alblallablalbla blablalbal blalblalbla blalbalblab ablalbalbl abllablalba balblabl abllablalblabl </div>
    </div>
    <div class="comments">
      <h2> Comments </h2>
      <p> Write your own stupid comment: </p>
      <form action="writeComment">
        <input type="text" name="comment">
      </form>
      <h3> Top Comments: </h3>
      <p> stupid </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
.story-container {
  display: block;
  width: 100%;
}

.story {
  background-color: white;
  display: block;
}

.story-picture {
  float: left;
  max-width: 30%;
  height: auto;
  margin: 0 20px 20px 0;
}

#floated {
  text-align: justify;
  width: 100%;
}

.comments {
  margin-top: 50px;
}

input {
  width: 75%;
  height: 30px;
}

h3 {
  margin-top: 40px;
  font-size: 14px;
}

</style>
