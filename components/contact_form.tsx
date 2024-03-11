import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import Button from './ui/button';

const schema = z.object({
  fullName: z.string().min(2).max(50).optional(),
  email: z.string().email().min(5).max(100).optional(),
  address: z.string().min(5).max(200).optional(),
});

type FormValues = z.infer<typeof schema>;

// Custom resolver function
const zodResolver = async (values: FormValues) => {
    try {
      // Validate the form values against the schema
      await schema.parseAsync(values);
      return {
        values,
        errors: {},
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Map zod validation errors to match the format expected by react-hook-form
        const fieldErrors: Record<string, any> = {}; // Specify the type here
  
        error.errors.forEach((validationError) => {
          const path = validationError.path.join('.');
          fieldErrors[path] = {
            type: 'validation',
            message: validationError.message,
          };
        });
  
        return {
          values: {},
          errors: fieldErrors,
        };
      }
      return {
        values: {},
        errors: {},
      };
    }
  };
  

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="text-xl font-bold block mb-2">
              Full Name
            </label>
            <input
              {...register('fullName')}
              type="text"
              id="fullName"
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
            {errors.fullName && (
              <span className="text-red-600 text-sm">{errors.fullName.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-xl font-bold block mb-2">
              Email Address
            </label>
            <input
              {...register('email')}
              type="text"
              id="email"
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
            {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="address" className="text-xl font-bold block mb-2">
              Address
            </label>
            <textarea
            {...register('address')}
            id="address"
            className="block w-[100%] p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 "
            />

            {errors.address && (
              <span className="text-red-600 text-sm">{errors.address.message}</span>
            )}
          </div>

          <div>
            <Button
              type="submit"
              className=" hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="flex items-center">
        <div>
          <label htmlFor="envelope" className="text-6xl font-bold text-yellow-500 block mb-4">
            💌
          </label>
          <p className="text-xl font-bold">Contact Us</p>
          <p className="text-gray-600">
            Have any questions? Feel free to contact us anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
