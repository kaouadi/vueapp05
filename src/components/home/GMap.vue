<template>
<div class="map">
    <div class="google-map" id="map">

    </div>
</div>
    
</template>
<script>
import firebase from 'firebase';
import db from '@/firebase/init';
export default {
    name: "GMap",
    data(){
        return {

            lat: 53,
            lng: -2,
            
        }
    },
    mounted(){
        // Get current user
        let user = firebase.auth().currentUser
        // Get user geolocation
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
                this.lat = position.coords.latitude
                this.lng = position.coords.longitude
                // find user records
                db.collection('user').where('user_id', '==', user.uid).get()
                .then(snapshot => {
                    snapshot.forEach((doc) => {
                        console.log(doc.id)
                        db.collection('users').doc(doc.id).update({
                            geolocation:{
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            }
                        })
                        
                    });
                })

                this.renderMap()
            }, (err) => {
                console.log(err)
                this.renderMap()
            }, {maximumAge: 60000, timeout: 6000})
        } else
        {
            // position centre by defauld value
            this.renderMap()
        }
        this.renderMap()

    },
    methods:{
        renderMap(){

            const map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: this.lat, lng: this.lng},
                zoom: 6,
                maxZoom: 13,
                minZoom: 3,
                streeViewControl: false
            })

            db.collection('users').get().then(users => {
                users.docs.forEach(doc => {
                    let data = doc.data()
                    if (data.geolocation) {
                        console.log(data)
                        let marker = new google.maps.Marker({
                            position: {
                                 lat: data.geolocation.latitude,
                                 lng: data.geolocation.lng
                            },
                            map
                        })
                        marker.addListener('click', () => {
                            console.log(doc.id)
                        })
                        
                    }
                })
            })

        }
    }


}
</script>

<style>
.google-map{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

}

</style>
