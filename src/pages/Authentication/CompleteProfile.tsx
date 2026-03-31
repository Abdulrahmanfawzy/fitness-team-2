import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import gymbackground from "../../../public/gymbackground.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup } from "@/components/ui/field";

import rightIcone from "./icones/rigtht.png";
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

function CompleteProfile() {
  const navigate = useNavigate();

  async function Submit() {
    navigate("/");
  }

  return (
    <div
      style={{ backgroundImage: `url(${gymbackground})` }}
      className="relative w-full flex-col overflow-hidden overflow-x-hidden py-5 min-h-screen flex items-center justify-center bg-center bg-cover before:absolute before:inset-0 before:bg-black/50"
    >
      <form
        className=" overflow-y-auto custom-scroll overflow-x-hidden h-[90vh]  px-5 py-7 z-10 text-white  border border-orange rounded-2xl w-[95%] md:w-[50%] lg:w-[35%]  bg-black/70 shadow-2xl flex flex-col items-center  gap-3"
        onSubmit={(e) =>{
          e.preventDefault() 
          Submit()
        }}
      >
        <h2 className=" text-2xl font-bold text-center">
          Personalize your training experience
        </h2>
        <h2 className=" text-lg text-gray-400 text-center">
          Tell us a few things about your fitness goals so we can recommend the
          best trainers for you.
        </h2>

        <div className=" w-full mt-2 ">
          <h2 className=" mb-1 text-sm font-bold">What is your gender?</h2>
          <RadioGroup className="bg-input p-2 rounded-md">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Male" id="Male" />
              <Label htmlFor="Male">Male</Label>
            </div>
            <div className=" border-b border-b-gray-200 w-full"></div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Female" id="Female" />
              <Label htmlFor="Female">Female</Label>
            </div>
          </RadioGroup>
        </div>

        <div className=" w-full mt-2">
          <h2 className=" mb-1 text-sm font-bold">
            What is your current fitness level?
          </h2>
          <RadioGroup className="bg-input p-2 rounded-md">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Beginner" id="Beginner" />
              <Label htmlFor="Beginner">Beginner</Label>
            </div>
            <div className=" border-b border-b-gray-200 w-full"></div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Intermediate" id="Intermediate" />
              <Label htmlFor="Intermediate">Intermediate</Label>
            </div>
            <div className=" border-b border-b-gray-200 w-full"></div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Advanced" id="Advanced" />
              <Label htmlFor="Advanced">Advanced</Label>
            </div>
          </RadioGroup>
        </div>

        <div className=" w-full mt-2">
          <h2 className=" mb-1 text-sm font-bold">
            How would you like to train?
          </h2>
          <RadioGroup className="bg-input p-2 rounded-md">
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="In-person-training"
                id="In-person-training"
              />
              <Label htmlFor="In-person-training">In-person training</Label>
            </div>
            <div className=" border-b border-b-gray-200 w-full"></div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Online-training" id="Online-training" />
              <Label htmlFor="Online-training">Online training</Label>
            </div>
            <div className=" border-b border-b-gray-200 w-full"></div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Both" id="Both" />
              <Label htmlFor="Both">Both</Label>
            </div>
          </RadioGroup>
        </div>

        <div className=" w-full mt-2">
          <h2 className=" mb-1 text-sm font-bold">
            How often do you plan to train?
          </h2>
          <RadioGroup className="bg-input p-2 rounded-md">
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="1-2-times-per-week"
                id="1-2-times-per-week"
              />
              <Label htmlFor="1-2-times-per-week">1-2 times per week</Label>
            </div>
            <div className=" border-b border-b-gray-200 w-full"></div>
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="3-4-times-per-week"
                id="3-4-times-per-week"
              />
              <Label htmlFor="3-4-times-per-week">3-4 times per week</Label>
            </div>
            <div className=" border-b border-b-gray-200 w-full"></div>
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="5+ times per week"
                id="5+ times per week"
              />
              <Label htmlFor="5+ times per week">5+ times per week</Label>
            </div>
            <div className=" border-b border-b-gray-200 w-full"></div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="Not sure yet" id="Not sure yet" />
              <Label htmlFor="Not sure yet">Not sure yet</Label>
            </div>
          </RadioGroup>
        </div>

        <div className=" w-full mt-2 ">
          <h2 className=" mb-1 text-sm font-bold">
            What is your primary fitness goal?
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-input p-2 rounded-md">
                Select your goals!
              </AccordionTrigger>
              <AccordionContent className="bg-input p-2 rounded-md mt-4 ">
                <FieldGroup>
                  <Field className="mt-4" orientation="horizontal">
                    <Checkbox id="terms-checkbox" name="terms-checkbox" />
                    <Label htmlFor="terms-checkbox">Lose weight</Label>
                  </Field>
                  <div className=" border-b border-b-gray-200 w-full"></div>
                  <Field orientation="horizontal">
                    <Checkbox id="terms-checkbox" name="terms-checkbox" />
                    <Label htmlFor="terms-checkbox">Build muscle</Label>
                  </Field>
                  <div className=" border-b border-b-gray-200 w-full"></div>
                  <Field orientation="horizontal">
                    <Checkbox id="terms-checkbox" name="terms-checkbox" />
                    <Label htmlFor="terms-checkbox">
                      Improve general fitness
                    </Label>
                  </Field>
                  <div className=" border-b border-b-gray-200 w-full"></div>
                  <Field orientation="horizontal">
                    <Checkbox id="terms-checkbox" name="terms-checkbox" />
                    <Label htmlFor="terms-checkbox">Strength training</Label>
                  </Field>
                  <div className=" border-b border-b-gray-200 w-full"></div>
                  <Field orientation="horizontal">
                    <Checkbox id="terms-checkbox" name="terms-checkbox" />
                    <Label htmlFor="terms-checkbox">
                      Flexibility and mobility
                    </Label>
                  </Field>
                  <div className=" border-b border-b-gray-200 w-full"></div>
                  <Field orientation="horizontal">
                    <Checkbox id="terms-checkbox" name="terms-checkbox" />
                    <Label htmlFor="terms-checkbox">Stay active</Label>
                  </Field>
                </FieldGroup>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button type="submit" className=" w-full bg-orange mt-3">
            Continue <img src={rightIcone} alt="" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CompleteProfile;
