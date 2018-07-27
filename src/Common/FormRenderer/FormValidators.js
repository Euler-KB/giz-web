
/**
 *  Validation inputs
 */
const Validators = [
    {
        name: "phone",
        behavior: "demand",
        validate: context => {

            function isValidPhone(phone) {
                return (phone.startsWith("233") ? phone.replace("233","0") : phone).length === 10;
            }

            if(!isValidPhone(context.value)){
                context.setError(`${context.name} must be a valid phone no.`);
            }

        }
    },
    {
        name: "email",
        behavior: "demand",
        validate: context => {

        }
    },
    {
        name: "range",
        behavior: "progressive",
        validate: context => {

            const max = context.args.max;
            const min = context.args.min;
            const value = context.value;

            if(value < min || value > max){
                context.setError(`${context.args.name} must be within the range ${min}-${max}`);
            }

        }
    },
    {
        name: "length",
        behavior: "progressive",
        validate: context => {

            const args = context.args;
            const valueLength = context.value ? context.value.length : 0;

            if(args.hasOwnProperty('min')){

                if(valueLength < args.min)
                    context.setError(`${args.name} cannot be less than ${args.min} characters`);

            }
            else if(args.hasOwnProperty('max')){

                if(valueLength > args.max)
                    context.setError(`${args.name} cannot exceed ${args.max} characters`);
            }

        }
    },
    {
        name: "required",
        behavior: "progressive",
        validate: context => {

            const value = context.value;
            if(!value){
                context.setError(`${context.name} is required`);
            }

        }
    },
    {
        name: "custom",
        behavior: "progressive",
        validate: context => {

            const args = context.args;
            const err = args.validator(context.value);
            if(err){
                context.setError(err);
            }
        }
    }
];

export default Validators;