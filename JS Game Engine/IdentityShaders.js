function IdentityVertexShader(positionIdx)
{
    function main(){
        return vertex[positionIdx];
    }
}

function BasicColorFragmentShader(colorIdx){
    
    function main(){
        return vertex[this.colorIdx];
    }
}