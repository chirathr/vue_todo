<template>
    <div class="col-md-6">
        <div class="card mt-4" v-on:click="$emit('add-todo')">
            
            <div class="card-body row">   
              
                 <i class="material-icons add-button">add_circle</i>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
