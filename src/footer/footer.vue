<template>
    <div class="footer-container">
        <p>
        Folge uns auch auf Sozialen Medien.
        </p>
        <div>
            <facebook scale="3"></facebook>
            <twitter scale="3"></twitter>
            <whats-app scale="3"></whats-app>
        </div>
        <div class="footer-horizontal">
            <p class="link"><a href="">Hilfe</a></p>
            <p class="link"><a href="">Datenschutz</a></p>
            <p class="link"><a href="">Impressum</a></p>
        </div>
        <p>
        © 2018 - <b>Beruehrungspunkte</b>
        </p>
    </div>
</template>

<script lang="ts">
    import {
        Facebook,
        Twitter,
        WhatsApp
    } from "vue-socialmedia-share";
    import Vue from 'vue'

    export default Vue.extend({
        components: {
            Facebook,
            Twitter,
            WhatsApp
        }
    })
</script>

<style>
    .footer-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        background-color: #F8F9FAFF;
    }

    .footer-horizontal {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 20%;
    }
</style>
